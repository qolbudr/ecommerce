import { Modal } from "@/shared/components/Modal";
import { Button } from "@/shared/components/Button";
import { useModalStore } from "@/shared/store/modal.store";
import { Input } from "@/shared/components/Input";
import { ImageUpload } from "@/shared/components/ImageUpload";
import { useProductStore } from "../store/product.store";
import { useForm } from "react-hook-form";
import { ProductFormValues, productSchema } from "../schema/product.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { RadioSelector } from "@/shared/components/RadioSelector";

export const ModalCreateProduct = () => {
  const modal = useModalStore();
  const store = useProductStore();

  const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    mode: "onChange",
    reValidateMode: "onBlur",
  });

  const addProduct = async (data: ProductFormValues) => {
    const result = await store.addProduct(data);
    if (result.status.isError) return toast.error(result.status.message!);
    reset();
    toast.success('Product has been created successfully');
    modal.closeModal('add-product');
  }

  return (
    <Modal
      identifier="add-product"
      title="Tambah Produk"
      cta={[
        <Button onClick={handleSubmit(addProduct)} loading={store.status.isLoading} fullWidth={true}>Simpan</Button>
      ]}
    >
      <form className="space-y-4 p-8 font-poppins" onSubmit={handleSubmit(addProduct)}>
        <ImageUpload
          validateRatio={false}
          onChange={
            (value) => {
              if (value != null) setValue('gambar', value);
            }
          }
        />
        <Input label="Nama Produk" placeholder="Masukkan nama produk" {...register("nama")} error={errors.nama?.message} />
        <Input label="Harga" placeholder="Masukkan harga produk" type="number" {...register("harga")} error={errors.harga?.message} />
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