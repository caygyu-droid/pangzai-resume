
import React from 'react';
import Typewriter from './components/Typewriter';
import PhotoUpload from './components/PhotoUpload';

const App: React.FC = () => {
  const typewriterWords = ['睡觉', '吃罐头', '打咕噜'];

  return (
    <div className="min-h-screen bg-white selection:bg-gray-900 selection:text-white">
      {/* Header */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="text-lg font-extrabold tracking-widest text-gray-900 uppercase">
          胖仔 PANG ZAI
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-500">
          <a href="#about" className="hover:text-black transition-colors">关于我</a>
          <a href="#experience" className="hover:text-black transition-colors">猫生经历</a>
          <a href="#hobbies" className="hover:text-black transition-colors">生活态度</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-gray-900">
            不仅是只猫，<br />
            更是专业的<br />
            <span className="text-gray-900">
              <Typewriter words={typewriterWords} />
            </span>
            专家
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
            我是胖仔，一名Freelancer。祖籍美国，中国本土长大，标准的 ABC (American Born Cat)。致力于在忙碌的都市生活中，为人类提供全方位的心理慰藉及毛发掉落服务。
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all shadow-xl shadow-gray-200">
              预约吸猫
            </button>
            <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-bold rounded-lg hover:bg-gray-50 transition-all">
              查看罐头库存
            </button>
          </div>
        </div>
        
        <div className="flex-shrink-0">
          <PhotoUpload />
        </div>
      </main>

      {/* Stats/Bio Section */}
      <section id="about" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">基本属性</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex justify-between border-b border-gray-50 pb-2"><span>物种</span><span className="font-bold">美短 (XL号)</span></li>
              <li className="flex justify-between border-b border-gray-50 pb-2"><span>母语</span><span className="font-bold">喵语 / 中文 (选择性听懂)</span></li>
              <li className="flex justify-between border-b border-gray-50 pb-2"><span>常驻地</span><span className="font-bold">阳光最好的窗台</span></li>
            </ul>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">核心爱好</h3>
            <div className="flex flex-wrap gap-2">
              {['吃饭', '睡觉', '啃老', '扒门缝', '踩奶', '凌晨四点跑酷'].map(hobby => (
                <span key={hobby} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full">{hobby}</span>
              ))}
            </div>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">猫生格言</h3>
            <p className="italic text-gray-600 leading-relaxed">
              "如果一个纸箱钻不进去，那一定是纸箱的问题，不是我的肚腩问题。"
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-16 text-center">喵生辉煌时刻</h2>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-8 pb-12 border-b border-gray-100">
            <div className="w-48 text-gray-400 font-bold">2020 - 至今</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">资深纸箱质检员 / 首席家具磨损顾问</h3>
              <p className="text-gray-500 mb-4">杭州某铲屎官宅邸</p>
              <p className="text-gray-600 leading-relaxed">
                负责测试市面上 99% 的快递纸箱耐受度。成功研发出一套“不被发现地拆开垃圾袋”的方法论。在沙发真皮抗抓挠测试领域发表过多次（物理性的）见解。
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 pb-12 border-b border-gray-100">
            <div className="w-48 text-gray-400 font-bold">2019 - 2020</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">职业生物闹钟 (4:00 AM 班次)</h3>
              <p className="text-gray-500 mb-4">自由职业</p>
              <p className="text-gray-600 leading-relaxed">
                利用精准的生物钟，在铲屎官进入深度睡眠时通过“肉垫拍脸”和“重力踩踏”提供强制唤醒服务。客户满意度虽然成迷，但出勤率 100%。
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-48 text-gray-400 font-bold">2018</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">猫罐头品鉴初学者</h3>
              <p className="text-gray-500 mb-4">某收容所</p>
              <p className="text-gray-600 leading-relaxed">
                在此期间确立了“不贵不吃”的基本饮食导向，并习得了如何用无辜的眼神从两足生物手中骗取冻干的核心技能。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">准备好雇佣我了吗？</h2>
          <p className="text-gray-400 mb-12 text-lg">目前接受高级罐头、高级冻干及 24 小时暖气供应的长期合约。</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-gray-400 transition-colors">WeChat: meow_pangzai</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Email: fat_boss@cat.com</a>
          </div>
          <div className="mt-20 pt-8 border-t border-gray-800 text-sm text-gray-500">
            &copy; 2026 胖仔个人工作室. 版权所有，禁止在未提供罐头的情况下转载。
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
