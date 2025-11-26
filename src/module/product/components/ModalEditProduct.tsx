import { Modal } from "@/shared/components/Modal";
import { Button } from "@/shared/components/Button";
import { useModalStore } from "@/shared/store/modal.store";
import { Input } from "@/shared/components/Input";
import { ImageUpload } from "@/shared/components/ImageUpload";
import { useProductStore } from "../store/product.store";
import { Product } from "@/shared/types/Product";
import { ProductFormValues, productSchema } from "../schema/product.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { RadioSelector } from "@/shared/components/RadioSelector";
import toast from "react-hot-toast";

export const ModalEditProduct = () => {
  const modal = useModalStore();
  const store = useProductStore();
  const product = modal.modalData as Product | undefined;

  const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    mode: "onChange",
    reValidateMode: "onBlur",
  });

  const updateProduct = async (data: ProductFormValues) => {
    const result = await store.updateProduct(product!.id!, data);
    if (store.status.isError) return toast.error(store.status.message!);
    reset();
    toast.success('Product has been updated successfully');
    modal.closeModal('edit-product');
  }

  useEffect(() => {
    if (product) {
      reset({
        nama: product.nama,
        gambar: product.gambar,
        harga: product.harga,
        status: product.status,
      });
    }
  }, [product, reset]);

  return (
    <Modal
      identifier="edit-product"
      title="Ubah Produk"
      cta={[
        <Button loading={store.status.isLoading} fullWidth={true} onClick={handleSubmit(updateProduct)}>Simpan</Button>
      ]}
    >
      <form className="space-y-4 p-8 font-poppins">
        <ImageUpload
          value={watch('gambar')}
          validateRatio={false}
          onChange={
            (value) => {
              if (value != null) setValue('gambar', value);
            }
          }
        />
        <Input label="Nama Produk" {...register('nama')} placeholder="Masukkan nama produk" />
        <Input label="Harga" placeholder="Masukkan harga produk" type="number" {...register('harga')} />
        <RadioSelector
          onChange={(value) => setValue('status', value == 'active' ? true : false)}
          value={watch('status') ? 'active' : 'inactive'}
          options={[
            { label: 'Aktif', value: 'active' },
            { label: 'Tidak Aktif', value: 'inactive' }
          ]}
        />
      </form>
    </Modal>
  )
}