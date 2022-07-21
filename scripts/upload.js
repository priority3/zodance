// https://help.aliyun.com/document_detail/32072.htm?spm=a2c4g.11186623.0.0.44d84b78PCbuX0#concept-32072-zh
// LTAI5tCHCTVyAs2YEFeKv3L6
// UocLbj7Oflspvr0fOR9ItH9uMkzwNq
const fs = require('fs')
const path = require('path')
const OSS = require('ali-oss')
const pkg = require('../package.json')

// dev | prod
const env = process.argv[2]

const {
  web: { aliOss },
} = pkg

const config = aliOss[env]

const srcDir = config.source.dir

const client = new OSS({
  region: config.region,
  accessKeyId: config.accessKeyId,
  accessKeySecret: config.accessKeySecret,
  bucket: config.bucket,
})

async function uploadFile(ossPath, filePath) {
  try {
    // 填写OSS文件完整路径和本地文件的完整路径。OSS文件完整路径中不能包含Bucket名称。
    // 如果本地文件的完整路径中未指定本地路径，则默认从示例程序所属项目对应本地路径中上传文件。
    await client.put(ossPath, path.normalize(filePath))
    console.warn(`${filePath} -> ${ossPath}`, '上传成功')
  } catch (e) {
    console.error(filePath, e)
  }
}

// 文件遍历方法
function uploadDir(filePath, ossPath) {
  // 根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, function (err, files) {
    if (err) {
      console.warn(err)
    } else {
      // 遍历读取到的文件列表
      files.forEach(function (filename) {
        // 获取当前文件的绝对路径
        const filedir = path.join(filePath, filename)
        // 根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(filedir, function (eror, stats) {
          if (eror) {
            console.warn('获取文件stats失败')
          } else {
            const isFile = stats.isFile() //是文件
            const isDir = stats.isDirectory() //是文件夹

            if (isFile) {
              let oss = ossPath

              // 统一路径
              filePath = path.normalize(filePath)

              // 将所有的 \ 替换为 /
              filePath = filePath.replace(/\\/g, '/')


              // 注意这里的 [\\\\|/] ，因为在linux下面路径时 dist/
              const replacedStr = filePath.replace(new RegExp(`${srcDir}[\\\\|/]*`, 'g'), '/')

              if (replacedStr === '/') {
                oss = oss + replacedStr + filename
              } else {
                oss = oss + replacedStr + '/' + filename
              }

              uploadFile(oss, `${filePath}/${filename}`)
            }
            if (isDir) {
              uploadDir(filedir, ossPath) //递归，如果是文件夹，就继续遍历该文件夹下面的文件
            }
          }
        })
      })
    }
  })
}

uploadDir(srcDir, config.target.dir)
