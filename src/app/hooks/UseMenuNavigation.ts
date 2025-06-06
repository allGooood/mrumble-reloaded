import useMenuStore from "@/app/stores/useMenuStore";
import { useRouter } from "next/navigation";

export const useMenuNavigation = () => {
    const router = useRouter();
    const menu = useMenuStore();

    const goOrder = () => {
        menu.close();
        router.push("/order");
    }

    const goHome = () => {
        menu.close();
        router.push("/");
    }

    const goLogin = () => {
        menu.close();
        router.push("/login");
    }

    return { 
        goOrder, 
        goHome,
        goLogin
    };
}