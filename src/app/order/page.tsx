import Products from "@/components/order/Products";
import Wrapper from "@/components/wrapper/Wrapper";

function Page() {

    return (
        <>
            <Wrapper>
                <div className="flex flex-col">
                    <Products></Products>
                    <Products></Products>
                    <Products></Products>
                    <Products></Products>
                </div>
            </Wrapper>
        </>
    );
}

export default Page;