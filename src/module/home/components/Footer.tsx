import { Icon } from "@iconify/react";

export const Footer: React.FC = () => {
    return <footer className="w-full border-t h-[400px] border-neutral-40">
        <div className="max-w-7xl h-full px-4 mx-auto">
            <div className="flex items-stretch h-full">
                <div className="flex items-center gap-x-[100px]">
                    <div className="text-center">
                        <img src="/logo-vascomm.png" alt="Vascomm Logo" className="h-8 my-5 mx-auto" />
                        <p className="text-sm max-w-[300px] text-neutral-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo in vestibulum, sed dapibus tristique nullam.</p>
                        <div className="flex justify-center gap-x-4 mt-15">
                            <Icon icon="mdi-facebook" className="text-primary cursor-pointer" />
                            <Icon icon="mdi-twitter" className="text-primary cursor-pointer" />
                            <Icon icon="mdi-instagram" className="text-primary cursor-pointer" />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-x-5">
                        <div className="col-span-1">
                            <h3 className="font-playfair text-xl mb-8">Layanan</h3>
                            <ul>
                                <li className="mt-3 text-sm text-neutral-80 cursor-pointer uppercase tracking-widest">Bantuan</li>
                                <li className="mt-3 text-sm text-neutral-80 cursor-pointer uppercase tracking-widest">Tanya Jawab</li>
                                <li className="mt-3 text-sm text-neutral-80 cursor-pointer uppercase tracking-widest">Hubungi Kami</li>
                                <li className="mt-3 text-sm text-neutral-80 cursor-pointer uppercase tracking-widest">Cara Berjualan</li>
                            </ul>
                        </div>
                        <div className="col-span-1">
                            <h3 className="font-playfair text-xl mb-8">Layanan</h3>
                            <ul>
                                <li className="mt-3 text-sm text-neutral-80 cursor-pointer uppercase tracking-widest">About Us</li>
                                <li className="mt-3 text-sm text-neutral-80 cursor-pointer uppercase tracking-widest">Karir</li>
                                <li className="mt-3 text-sm text-neutral-80 cursor-pointer uppercase tracking-widest">Blog</li>
                                <li className="mt-3 text-sm text-neutral-80 cursor-pointer uppercase tracking-widest">KEBIJAKAN PRIVASI</li>
                                <li className="mt-3 text-sm text-neutral-80 cursor-pointer uppercase tracking-widest">Syarat dan ketentuan</li>
                            </ul>
                        </div>
                        <div className="col-span-2">
                            <h3 className="font-playfair text-xl mb-8">Mitra</h3>
                            <ul>
                                <li className="mt-3 text-sm text-neutral-80 cursor-pointer uppercase tracking-widest">Supplier</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-[#E4FDFF] w-full h-10"></div>
    </footer>;
}