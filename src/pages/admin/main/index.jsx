import { Button, Drawer, Space } from 'antd';
import { useState } from 'react';

export default function Main() {
  const [open, setOpen] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  return (
    <>
      <Space>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        placement={placement}
        open={open}
        closable={isShowMenu}
        rootClassName="menu"
      >
      <div class="h-full px-4 bg-[#2F2F35] z-10 w-72">
            <div class=" text-white py-6 px-12 z-0">
                <img src="../assets/image/logo.png" class="mx-auto" alt="logo" />
            </div>
            <div class="space-y-2">
                <div class="flex items-center space-x-5 z-10 cursor-pointer text-white p-2 menu-hover">
                    <img src="../assets/image/menu/home.png" alt="" />
                    <span>홈</span>
                </div>
                <div class="p-2 text-gray-500 {{isShowMenu ? 'line-menu' : ''}}">
                    {isShowMenu ? '' : '모니터링'}
                </div>
                <div class="flex items-center space-x-5 z-10 cursor-pointer text-white p-2 menu-hover">
                    <img src="../assets/image/menu/chart-pipe.png" alt="" />
                    <span>TBM 현황</span>
                </div>
                <div class="flex items-center space-x-5 z-10 cursor-pointer text-white p-2 menu-hover">
                    <img src="../assets/image/menu/writer.png" alt="" />
                    <span>업체평가</span>
                </div>
                <div class="p-2 text-gray-500 {{isShowMenu ? 'line-menu' : ''}}">
                    {isShowMenu ? '' : '관리'}
                </div>
                {/* <div class="flex items-center space-x-5 z-10 cursor-pointer text-white p-2 menu-hover"
                    *ngFor="let item of menu">
                    <img src="{{item.icon}}" alt="">
                    <span>{{item.title}}</span>
                </div> */}
            </div>

        </div>
        <div class=" absolute right-[-15px] top-10 z-20 px-1 rounded-full bg-[#28282B] ">
            <span class="material-icons text-white text-2xl  cursor-pointer {isShowMenu ? 'arrow-rotate' : ''}"
              >
                chevron_right
            </span>
        </div>
      </Drawer>
    </>
  );
}
