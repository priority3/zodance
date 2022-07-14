## icons

svg image的处理


项目上引入的svg如果存在引入image的问题 可能存在的冲突问题

> 查看svg文件下的 **pattern 标识**是否唯一 项目下的builder出来的Symbol 以pattern唯一标识来做索引，在引入ui的svg图片时，他是单个的svg，这在浏览器单个打开都没有任何问题，但是在svgbuilde出来之后，我们以svgicon以**patter**作为索引，如果pattern相同那么这只会去索引到先构建的svg

