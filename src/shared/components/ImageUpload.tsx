'use client';

import React, { useRef, useState } from "react";

interface ImageUploadProps {
    onChange?: (file: File | null) => void;
    validateRatio?: boolean;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, validateRatio = false }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSelectImage = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const img = new Image();
        const url = URL.createObjectURL(file);

        if (!validateRatio) {
            setPreview(url);
            setError(null);
            onChange?.(file);
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
                onChange?.(file);
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
                        <div className="flex flex-col items-center gap-3">
                            <img src="/images/misc/upload-image.png" alt="upload" className="w-auto" />

                            <p className="text-gray-500 text-m">
                                Pilih gambar dengan ratio 9:16
                            </p>
                        </div>
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
