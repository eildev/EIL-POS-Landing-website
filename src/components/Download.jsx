import Header from "../utility/Header";


const Download = () => {
    return (
        <div className="md:mt-[120px] mt-12 bg-[#F7FAFD] md:py-[120px] py-10">
            <div className="w-[95%] mx-auto ">
            <Header 
  title="Compatible with All Platforms" 
  heading="Download Now" 
  sub_title="Seamlessly run on Linux, Windows, and other platforms with full support."
/>

                <div className="flex justify-center items-center gap-5 flex-wrap">
                    <button className="bg-[#0F70EB] rounded-[27px] pl-[20px] pr-[31px] flex items-center gap-[7px] py-[7px]">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.934 18.947C23.336 20.271 23.05 20.863 22.282 22.033C21.209 23.667 19.694 25.706 17.821 25.72C16.155 25.734 15.725 24.633 13.464 24.651C11.203 24.662 10.732 25.74 9.06399 25.723C7.19099 25.706 5.75699 23.869 4.68299 22.238C1.67999 17.663 1.36299 12.301 3.21899 9.44798C4.53199 7.42498 6.60999 6.23698 8.56099 6.23698C10.548 6.23698 11.797 7.32898 13.44 7.32898C15.034 7.32898 16.005 6.23398 18.303 6.23398C20.041 6.23398 21.879 7.18098 23.192 8.81498C18.896 11.169 19.594 17.305 23.934 18.947ZM16.559 4.40798C17.395 3.33498 18.029 1.82098 17.799 0.276978C16.435 0.369978 14.84 1.24098 13.908 2.36898C13.064 3.39598 12.364 4.92198 12.637 6.39798C14.125 6.44598 15.665 5.55898 16.559 4.40798Z" fill="white" />
                        </svg>

                        <div className="text-left">
                            <span className="block text-xs text-white">Download with</span>
                            <span className="text-white">macOS</span>
                        </div>
                    </button>
                    <button className="bg-[#0F70EB] rounded-[27px] pl-[20px] pr-[31px] flex items-center gap-[7px] py-[7px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 13V20.434C21 20.6354 20.9594 20.8348 20.8807 21.0202C20.8019 21.2056 20.6867 21.3733 20.5417 21.5132C20.3968 21.6531 20.2252 21.7623 20.0371 21.8345C19.849 21.9066 19.6483 21.9401 19.447 21.933L19.314 21.922L12 21.008V13H21ZM10 13V20.758L4.752 20.102C4.26821 20.0415 3.82316 19.8064 3.50052 19.4409C3.17789 19.0753 2.99989 18.6045 3 18.117V13H10ZM19.314 2.07798C19.5139 2.05301 19.7167 2.06855 19.9105 2.12368C20.1042 2.1788 20.2849 2.27239 20.4416 2.39884C20.5984 2.5253 20.7281 2.68204 20.823 2.85971C20.9179 3.03738 20.9761 3.23235 20.994 3.43298L21 3.56598V11H12V2.99198L19.314 2.07798ZM10 3.24198V11H3V5.88298C2.99989 5.39542 3.17789 4.92461 3.50052 4.55907C3.82316 4.19353 4.26821 3.95843 4.752 3.89798L10 3.24198Z" fill="white" />
                        </svg>


                        <div className="text-left">
                            <span className="block text-xs text-white">Download with</span>
                            <span className="text-white">Windows</span>
                        </div>
                    </button>
                    <button className="bg-[#0F70EB] rounded-[27px] pl-[20px] pr-[31px] flex items-center gap-[7px] py-[7px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.62 8.35C14.2 8.63 12.87 9.39 12.67 9.54C12.28 9.85 11.92 9.83 11.53 9.53C11.33 9.37 10 8.61 9.58002 8.34C9.10002 8.03 9.13002 7.64 9.66002 7.42C11.3 6.73 12.94 6.78 14.57 7.45C15.06 7.66 15.08 8.05 14.62 8.35ZM21.84 15.63C20.91 13.54 19.64 11.64 18 9.97C17.4926 9.44364 17.1278 8.79659 16.94 8.09C16.84 7.76 16.77 7.42 16.7 7.08C16.5 6.2 16.41 5.3 16 4.47C15.27 2.89 14 2.07 12.16 2C10.35 2.05 9.00002 2.81 8.21002 4.4C8.00002 4.83 7.85002 5.28 7.75002 5.74C7.58002 6.5 7.43002 7.29 7.25002 8.06C7.10002 8.71 6.80002 9.27 6.29002 9.77C4.68002 11.34 3.39002 13.14 2.41002 15.12C2.27002 15.41 2.13002 15.7 2.04002 16C1.85002 16.66 2.33002 17.12 3.03002 16.96C3.47002 16.87 3.91002 16.78 4.33002 16.65C4.74002 16.5 4.90002 16.6 5.00002 17C5.65002 19.15 7.07002 20.66 9.24002 21.5C13.36 23.06 18.17 20.84 19.21 16.92C19.28 16.65 19.38 16.55 19.68 16.65C20.14 16.79 20.61 16.89 21.08 17C21.57 17.09 21.93 16.84 22 16.36C22.03 16.1 21.94 15.87 21.84 15.63Z" fill="white"/>
</svg>


                        <div className="text-left">
                            <span className="block text-xs text-white">Download with</span>
                            <span className="text-white">Linux</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Download;