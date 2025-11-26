import { Button } from "@/shared/components/Button";
import { Input } from "@/shared/components/Input";

export const Navbar: React.FC = () => {
    return (
        <div className="flex py-5 px-10 justify-between items-center border-b border-neutral-40 bg-white fixed top-0 left-0 right-0 z-20">
            <img src="/logo-vascomm.png" alt="Vascomm Logo" className="h-8" />
            <Input className="max-w-1/2" placeholder="Cari parfum kesukaanmu" suffixicon={'mdi-search'} filled={true} />
            <div className="flex gap-x-3">
                <Button dense={false} variant="outline">Masuk</Button>
                <Button dense={false}>Daftar</Button>
            </div>
        </div>
    );
}