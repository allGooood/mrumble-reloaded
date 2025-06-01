import useMenuStore from "@/store/useMenuStore";
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

    return { 
        goOrder, 
        goHome 
    };
}