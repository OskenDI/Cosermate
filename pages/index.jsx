
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cosermate - 首页</title>
      </Head>
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow sticky top-0 z-50">
        {/* 左侧 Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Cosermate" className="h-8" />
          <span className="text-xl font-bold text-indigo-600">Cosermate</span>
        </div>

        {/* 中部搜索框 */}
        <div className="flex-1 px-4">
          <input
            type="text"
            placeholder="搜索角色 / 用户 / 委托"
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* 右侧按钮组 */}
        <div className="flex items-center space-x-4">
          <button className="text-sm px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600">
            发布委托
          </button>
          <button className="text-gray-700 hover:text-indigo-600">登录 / 注册</button>
        </div>
      </header>

      {/* 菜单栏 */}
      <nav className="flex justify-center space-x-6 py-4 bg-gray-50 border-b text-gray-700 font-medium">
        <a href="#" className="hover:text-indigo-600">我的关注</a>
        <a href="#" className="hover:text-indigo-600">我的粉丝</a>
        <a href="#" className="hover:text-indigo-600">我的照片</a>
        <a href="#" className="hover:text-indigo-600">商城</a>
        <a href="#" className="hover:text-indigo-600">合作</a>
      </nav>

      <main className="p-6 text-center text-gray-600">
        <h1 className="text-2xl font-semibold mb-4">欢迎来到 Cosermate</h1>
        <p>一个专属于 Coser 和粉丝的陪伴与互动平台。</p>
      </main>
    </>
  );
}
