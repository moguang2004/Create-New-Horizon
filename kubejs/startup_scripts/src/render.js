//渲染用物品
global.space_item = ["space_layer","sun",'earth','moon','mars','jupiter','europa']
StartupEvents.registry('item',event=> global.space_item.forEach(it => event.create(it)))
StartupEvents.registry('block', event => {
    //鸿蒙之眼渲染器
    event.create("eye_of_harmony_renderer")
        .blockEntity( info => {
            info.enableSync();
        })
        .defaultTranslucent()
        .lightLevel(15)
        .unbreakable()
})
    global.cilentInited = false
    if (true) {
        ClientEvents.init(event => {
        global.cilentInited = true
        event.registerBlockEntityRenderer("kubejs:eye_of_harmony_renderer" , (context) => RenderJSBlockEntityRenderer
            .create(context)
            .setCustomRender((_renderer, context) => {
                const blockEntityJs = context.blockEntityJS
                const level = blockEntityJs.level
                const gameTime = level.time;
                const poseStack = context.poseStack
                const blockPos = blockEntityJs.blockPos;//获取方块位置
                const lightLevel = LevelRenderer.getLightColor(level, blockPos)//获取亮度
                const rotationSpeedSpace = 0.05;
                const tiltAngle = (gameTime * rotationSpeedSpace) % 360;
                const tiltRad = tiltAngle * (KMath.PI / 180);
                const sinTilt = Math.sin(tiltRad);
                const cosTilt = Math.cos(tiltRad);
                const rotationAxisY = new Vector3f(0,1,0);//局部Y轴
                //全局姿态变换———//
                poseStack.pushPose()
                poseStack.translate(0.5,0.5,0.5)
                poseStack.mulPose(new Quaternionf().fromAxisAngleDeg(new Vector3f(1,0,0),tiltAngle * 0.5))
                poseStack.mulPose(new Quaternionf().fromAxisAngleDeg(new Vector3f(0,0,1),tiltAngle * 0.5))
                //—渲染太空背景——//
                poseStack.pushPose()
                const angleSpace = (gameTime * rotationSpeedSpace + 90) % 360;
                poseStack.mulPose(new Quaternionf().fromAxisAngleDeg(rotationAxisY,-angleSpace));
                poseStack.scale(0.125,0.125,0.125)
                RenderJSWorldRender.renderStatic(Item.of("kubejs:space_layer"),"ground",lightLevel,context.packedOverlay, poseStack,context.bufferSource,level,0)
                poseStack.popPose()
                //—添加太阳系姿态变换———//
                const rotationSpeedSun = 0.4;
                const angleSun = (gameTime * rotationSpeedSun)% 360;
                poseStack.mulPose(new Quaternionf().fromAxisAngleDeg(rotationAxisY,angleSun));
                //——渲染太阳——//
                poseStack.pushPose();
                poseStack.scale(0.015,0.015,0.015);
                RenderJSWorldRender.renderStatic(Item.of("kubejs:sun"),"ground",lightLevel,context.packedOverlay, poseStack,context.bufferSource,level, 0)
                poseStack.popPose();
                //定义行星及其卫星数组
                const planets = [
                // {
                //     name: "kubejs:earth",
                //     orbitRadius: 2.4,//公转半径
                //     orbitSpeed: 1.4,//公转速度
                //     selfRotationSpeed: 2.6,//自转速度（非潮汐锁定时有效)
                //     tidallyLocked: false,//是否潮汐锁定
                //     scale: 1.8,//缩放比例
                //     height: 0.34,
                //     satellites:[
                //         {
                //             name: "kubejs:moon",
                //             orbitRadius: 0.35,//月球相对于地球的公转半径orbitSpeed: 3.87,/月球的公转速度
                //             tidallyLocked: true,
                //             scale: 0.3,//月球相对于地球的缩放比例
                //             height: 0.1
                //         }
                //     ]
                // },
                // {
                //     name: "kubejs:mars",
                //     orbitRadius: 3.7,//公转半径
                //     orbitspeed: 1.32,//公转速度
                //     selfRotationSpeed: 0.8,//自转速度
                //     tidallyLocked: false,//是否潮汐锁定
                //     scale: 1.7,//缩放比例
                //     height: -0.23,
                //     satellites: []
                // },
                // {
                //     name: "kubejs:jupiter",
                //     orbitRadius : 6.5,//木星的公转半径
                //     orbitSpeed: 0.8,//木星的公转速度
                //     selfRotationSpeed: 1.0,//木星的自转速度
                //     tidallyLocked: false,//是否潮汐锁定
                //     scale: 4.0,//木星的缩放比例
                //     height: -0.13,
                //     satellites: [ //木星的卫星
                //         {
                //             name: "kubejs:europa",
                //             orbitRadius: 0.35,//木卫二相对于木星的公转半径
                //             orbitSpeed: 2.5,//木卫二的公转速度
                //             selfRotationSpeed : 3.0,//木卫二的自转速度
                //             tidallyLocked : false,
                //             scale: 0.3,//木卫二的缩放比例
                //             height: 0.1
                //         }
                //     ]
                // }
            ];
                /**
                * 计算并应用自转四元数
                * @param {{
                *   name: string;
                *   orbitRadius: number;
                *   orbitSpeed: number;
                *   selfRotationSpeed: number;
                *   tidallyLocked: boolean;
                *   scale: number;
                *   height : number;
                * }} celestial - 行星或卫星对象
                * @param {number} gameTime -当前游戏时间
                * @returns {Quaternionf} -计算得到的自转四元数
                * */
                const calculateSelfRotationQuaternion = (celestial) => {
                    const angleSelf = celestial.tidallyLocked
                    ? -(gameTime * celestial.orbitSpeed)% 360
                    : (gameTime * celestial.selfRotationSpeed)% 360;
                    return new Quaternionf().fromAxisAngleDeg(rotationAxisY,angleSelf);
                };

                /**
                *渲染天体(行星或卫星)* 
                * @param {{
                *   name: string;
                *   orbitRadius: number;
                *   orbitSpeed : number;
                *   selfRotationSpeed:number;
                *   tidallyLocked: boolean;
                *   scale: number;
                *   height : number;
                *   satellites: [];
                * }} celestial -行星或卫星对象
                * @param {Vector3f} parentWorldPos -父级世界坐标
                * */
                const renderCelestial = (celestial, parentWorldPos)=>{
                    poseStack.pushPose();
                    //计算公转
                    const angleOrbit = (gameTime * celestial.orbitSpeed) % 360;
                    const orbitQuaternion = new Quaternionf().fromAxisAngleDeg(rotationAxisY,angleOrbit);poseStack.mulPose( orbitQuaternion);
                    //平移到公转半径位置
                    poseStack.translate(celestial.orbitRadius,celestial.height,0);//自转
                    const selfRotationQuaternion = calculateSelfRotationQuaternion(celestial);poseStack.mulPose(selfRotationQuaternion);
                    //缩放
                    poseStack.scale(celestial.scale,celestial.scale,celestial.scale);
                    //计算世界坐标
                    const orbitPosLocal = new Vector3f(celestial.orbitRadius,0,0);
                    orbitPosLocal.rotate( orbitQuaternion);
                    const worldX = (parentWorldPos ? parentWorldPos.x() : blockPos.x + 0.5) + orbitPosLocal.x * 1
                    const worldY = (parentWorldPos ? parentWorldPos.y() : blockPos.y + 0.5) +orbitPosLocal.y * cosTilt - orbitPosLocal.z * sinTilt;
                    const worldZ = (parentWorldPos ? parentWorldPos.z() : blockPos.z + 0.5) + orbitPosLocal.y * sinTilt + orbitPosLocal.z * cosTilt;
                    const lightPos = new BlockPos(Math.floor(worldX),Math.floor(worldY),Math.floor(worldZ));
                    const lightLevel = LevelRenderer.getLightColor(level,lightPos);
                    //渲染
                    RenderJSWorldRender.renderStatic(Item.of(celestial.name),"ground",lightLevel,
                        context.packedOverlay,
                        poseStack,
                        context.bufferSource,
                        level,
                        0
                    );
                    //渲染卫星(如果有)
                    if (celestial.satellites && celestial.satellites.length > 0){
                        celestial.satellites.forEach( ( satellite) =>
                            renderCelestial(satellite,{ x: worldX,y: worldY,z: worldZ })
                        );
                    }
                    poseStack.popPose();
                };
                //渲染行星及其卫星
                    planets.forEach((planet) => renderCelestial(planet));
                    poseStack.popPose();
                })
            )
        })
    }
    