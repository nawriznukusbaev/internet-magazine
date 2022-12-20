export const HeaderTop = () => {
    return (
        <div className="bg-[#da002b] w-full">
            <div className="container flex flex-row justify-between items-center mx-auto py-2.5" >
                <div  style={{height:"50px"}} className="flex flex-row bg-[#f8fafc] py-1.5 px-3 rounded-md items-center">
                    <p className="font-bold text-2xl">MEDIAPARK</p>
                </div>
                <div  style={{height:"50px"}}className="flex flex-row bg-[#f8fafc] p-1.5 rounded-md items-center">
                    <p className="font-bold text-2xl ">Каталог</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                    <input style={{height:"50px",width: "700px"}} className="rounded-md mr-1" placeholder={'search'}/>
                    <button style={{height:"50px"}} className="rounded-md px-3 border border-slate-300 hover:border-indigo-300">Search</button>
                </div>
                <div className="flex flex-row items-center text-white">
                    <div className="flex flex-col  p-1 mr-4 rounded-md ">
                        <p className="text-sm font-normal">Вход/</p>
                        <p className="text-sm font-normal">Регистрация</p>
                    </div>
                    <div className="flex flex-col  p-1 mr-4 rounded-md">
                        <p className="text-sm font-normal">Корзина/</p>
                        <p className="text-sm font-normal">Оформления заказа</p>
                    </div>
                    <p className="font-bold text-xl">(90) 653 53 07</p>
                </div>
            </div>
        </div>
    );
}