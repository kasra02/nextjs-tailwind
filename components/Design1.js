const Design1 = () => {
    return (
        <div className="mt-10 px-8">
            <div className="mx-auto lg:w-3/5 lg:flex lg:h-auto">
                <img src="/design1/images/drawers.jpg" className="rounded-tr-md rounded-tl-md w-full h-48 lg:w-2/5 lg:h-auto lg:rounded-tl-md lg:rounded-bl-md lg:rounded-tr-none" alt=""/>
                <div className="bg-white p-8 rounded-bl-md rounded-br-md lg:w-3/5">
                    <h2 className="text-l text-gray-700 font-semibold">Shift overall look and fell by adding these wonderful touches to furniture in your home</h2>
                    <p className="text-xs text-gray-600 mt-3">Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>
                    <div className="mt-6 flex items-center">
                        <div className="flex items-center">
                            <img src="/design1/images/avatar-michelle.jpg" className="w-10 h-10 rounded-full" alt=""/>
                            <div className="ml-4">
                                <p className="text-gray-700 text-sm font-semibold">Michelle Appleton</p>
                                <p className="text-gray-400 text-sm">28 Jun 2020</p>
                            </div>
                        </div>
                        <div className="bg-gray-200 w-8 h-8 ml-auto rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Design1