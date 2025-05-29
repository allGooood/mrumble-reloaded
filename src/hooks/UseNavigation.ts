import useMenuStore from "@/store/useMenuStore";
import { useRouter } from "next/navigation";

export const useNavigation = () => {
    const router = useRouter();
    const {isMenuOpen, openMenu, closeMenu} = useMenuStore();

  

    const goOrder = () => {
        closeMenu();
        router.push("/order");
    }

    return { goOrder };
}