import useMenuStore from "@/store/useMenuStore";
import { useRouter } from "next/navigation";

export const useNavigation = () => {
    const router = useRouter();
    const menu = useMenuStore();

    const goOrder = () => {
        menu.close();
        router.push("/order");
    }

    return { goOrder };
}