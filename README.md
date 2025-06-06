# Create-New-Horizon
Welcome!
[CurseForge](https://www.curseforge.com/minecraft/modpacks/ctnh)  
[mcmod](https://www.mcmod.cn/modpack/897.html)  
[Discord](https://discord.com/invite/jQpvUDsVX8)  
QQ Group: 915521426  
An modpack which combined Create and GregTech together! According to the core mod Gregtech, we adjust lots of mods with KubeJS and write some new mods!
Now Version:1.1.2  
# Attention
* 使用该库时，在git clone之后，需要先运行`sh setup.sh`(Linux)或者`./setup.bat`(Windows)来进行初始化，给git加上pre-push和post-merge的hook
## packwiz使用
教程在 [packwiz-tutorial](https://packwiz.infra.link/tutorials/creating/getting-started/)
* `packwiz update --all`：更新所有mod
* `packwiz update <modid>`：更新指定mod
* `packwiz refresh`: 更新index和pack.toml
* `packwiz curseforge detect`: 将所有.jar模组转化为对应的pw.toml文件
## fixup使用
为所有的pw.toml文件里添加对应模组的curseforge或者modrinth下载的url链接，最好在更新模组之后，运行`packwiz curseforge detect`来重新生成新的pw.toml，然后利用`bash fixup.sh`更新url，最后`packwiz refresh`来更新index和pack。脚本来源[Misterio77/Modpack](https://github.com/Misterio77/Modpack)  
注：需要在终端提前下载jq,tomlq,curl，运行`pip install jq tomlq curl`
## packwiz-installer使用
运行`java -jar packwiz-installer-bootstrap.jar ./pack.toml`来从pw.toml后缀的文件下载对应的.jar文件，一般在启动游戏之前需要运行一下，不然游戏找不到对应的模组文件