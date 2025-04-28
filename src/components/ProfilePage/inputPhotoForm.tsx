import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InputPhotoForm = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value.trim();
    setImageUrl(url);

    const image = new Image();
    image.src = url;

    image.onload = () => {
      setImagePreview(url);
    };

    image.onerror = () => {
      toast.error('The image link is invalid or the image was not found.');
      setImagePreview(null);
    };
  };

  const handleDeleteImage = () => {
    setImageUrl('');
    setImagePreview(null);
    toast.success('Image has been deleted.');
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full mt-6 mx-auto space-y-6 p-5 border border-gray-200 rounded-2xl">
        <h1 className="text-gray-900 text-left font-bold">Add Photo</h1>
        <div className="space-y-6">
          <Card className="p-4 border border-gray-200 rounded-2xl">
            <CardContent>
              <div className="space-y-2">
                <div className="w-[5wh] h-[10vh] flex items-center justify-center bg-muted rounded-lg overflow-hidden relative">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="h-full object-cover"
                    />
                  ) : (
                    <div className="text-muted-foreground">
                      Preview will appear here
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Label>Add Image URL</Label>
            <div className="flex gap-4 items-center">
              <Input
                placeholder="Enter image URL"
                value={imageUrl}
                className="p-4 text-gray-400 border border-gray-200 rounded-xl"
                onChange={handleImageChange}
              />
              {/* Delete Btn */}
              <button
                onClick={handleDeleteImage}
                className="bg-red-500 text-white rounded-2xl px-3 py-2 hover:bg-red-600 cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputPhotoForm;
