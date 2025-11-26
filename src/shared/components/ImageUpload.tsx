'use client';

import React, { useRef, useState } from "react";

interface ImageUploadProps {
    onChange?: (file: string | null) => void;
    validateRatio?: boolean;
    value?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, validateRatio = false, value }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => reject(error);
        });
    };

    const handleSelectImage = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const img = new Image();
        const url = URL.createObjectURL(file);
        const base64 = await fileToBase64(file);

        if (!validateRatio) {
            setPreview(url);
            setError(null);
            onChange?.(base64);
            return;
        }

        img.src = url;

        img.onload = () => {
            const ratio = img.width / img.height;
            const expectedRatio = 9 / 16;

            if (Math.abs(ratio - expectedRatio) > 0.02) {
                setError("Rasio gambar harus 9:16");
                setPreview(null);
                onChange?.(null);
            } else {
                setError(null);
                setPreview(url);
                onChange?.(base64);
            }
        };
    };

    return (
        <div className="w-full bg-[#f6f6f6]">
            <div
                onClick={handleSelectImage}
                className="w-full flex flex-col justify-center items-center cursor-pointer min-h-[150px] hover:bg-blue-50 transition"
            >
                {!preview ? (
                    <>
                        {
                            value && (
                                <div className="w-full flex justify-center mb-3">
                                    <img
                                        src={value}
                                        alt="preview"
                                        className="max-h-[150px] object-contain"
                                    />
                                </div>
                            )
                        }
                        {!value && (
                            <div className="flex flex-col items-center gap-3">
                                <img src="/images/misc/upload-image.png" alt="upload" className="w-auto" />

                                <p className="text-gray-500 text-m">
                                    Pilih gambar dengan ratio 9:16
                                </p>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="w-full flex justify-center">
                        <img
                            src={preview}
                            alt="preview"
                            className="max-h-[150px] object-contain"
                        />
                    </div>
                )}
            </div>

            {error && <p className="text-red-500 mt-2">{error}</p>}

            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
            />
        </div>
    );
};
