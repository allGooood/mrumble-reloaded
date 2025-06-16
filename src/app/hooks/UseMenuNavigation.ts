import useMenuStore from "@/app/stores/useMenuStore";
import { useRouter } from "next/navigation";

export const useMenuNavigation = () => {
    const router = useRouter();
    const menu = useMenuStore();

    const goProducts = () => {
        menu.close();
        router.push("/products");
    }

    const goHome = () => {
        menu.close();
        router.push("/");
    }

    const goLogin = () => {
        menu.close();
        router.push("/login");
    }

    const goCheckout = () => {
        router.push("/checkout");
    }

    return { 
        goProducts, 
        goHome,
        goLogin,
        goCheckout
    };
}