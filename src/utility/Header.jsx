

const Header = ({title, sub_title, heading}) => {
    return (
        <div className="mb-10 w-[95%] mx-auto">
            <span className="text-[#00C9A7] w-[130px] bg-[#E8FAF6] py-2 block text-center text-[11px] rounded-2xl mx-auto">{heading}</span>
            <h1 className="text-[#1E2022] text-[32px] text-center mt-[15px] mb-[10px]">{title}</h1>
            <p className="max-w-[457px] mx-auto text-[17px] tracking-[0.6px] text-[#77838F] text-center">{sub_title}</p>
        </div>
    );
};

export default Header;