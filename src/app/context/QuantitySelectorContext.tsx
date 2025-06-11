import { createContext, useContext, useState } from "react";

type QuantitySelectorContextType = {
    quantities: Record<string, number>;
    setQuantity: (id: string, count: number) => void;
    getQuantity: (id: string) => number;
    total: number;
};

export const QuantitySelectorContext = createContext<QuantitySelectorContextType | undefined>(undefined);

export const useQuantitySelectorContext = () => {
    const context = useContext(QuantitySelectorContext);
    return context;
}; 

export const QuantitySelectorProvider = ({children}:{children: React.ReactNode}) => {
    const [quantities, setQuantities] = useState<Record<string, number>>({});
        
    const setQuantity = (id:string, count:number) => {
        setQuantities(prev => ({
            ...prev,
            [id]: count
        }));
    };

    const getQuantity = (id: string) => {
        return quantities[id] ?? 0;
    };

    const total = Object.values(quantities).reduce((a,b) => a+b, 0);

    return (
        <QuantitySelectorContext.Provider value={{quantities: quantities, setQuantity: setQuantity, getQuantity: getQuantity, total}}>
            {children}
        </QuantitySelectorContext.Provider>
    );
};
