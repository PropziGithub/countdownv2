import  Container  from "@/components/Container";


const Footer = () => {
    return (
        <section className="bg-[#FFFFFF] py-2">
            <Container>
                <div className="flex items-center justify-center pt-6">
                    <p className="mt-6 text-xs text-[#000000] font-Sans md:mt-0">
                        &copy; Toppers Pizza 2022. All rights Reserved.
                    </p>
                </div>
            </Container>
        </section>
    );
};
export default Footer;
