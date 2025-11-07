import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import imageCompression from 'browser-image-compression';

const QualityInputForm = ({ onSave, currentData, onLogout }) => {
  const [formData, setFormData] = useState({
    week: currentData.week,
    ncRouterValue: currentData.kpis.nc_router_doors.value,
    imageLabel: currentData.kpis.image.label,
    imageUrl: currentData.kpis.image.url || ''
  });
  
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (event) => {
    try {
      setUploading(true);
      const file = event.target.files[0];
      if (!file) return;

      const compressedFile = await imageCompression(file, {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    });

      const timestamp = Date.now();
      const fileExt = file.name.split('.').pop();
      const fileName = `quality-${timestamp}.${fileExt}`;

      const { error } = await supabase.storage
        .from('quality-issues-image')
        .upload(fileName, compressedFile);

      if (error) throw error;

      const { data } = supabase.storage
        .from('quality-issues-image')
        .getPublicUrl(fileName);

      setFormData({ ...formData, imageUrl: data.publicUrl });
      alert('Gambar berhasil diupload!');
    } catch (error) {
      alert('Gagal upload gambar: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.week || formData.ncRouterValue === '' || !formData.imageLabel) {
      alert('Harap isi semua field!');
      return;
    }
    onSave(formData);
    alert('Data berhasil disimpan!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-green-700 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-green-900 text-center flex-1 ml-28">KPI Input - Quality</h1>
            <button
              onClick={onLogout}
              className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700"
            >
              Logout
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-green-900 font-bold mb-2">Week</label>
                <input
                  type="text"
                  name="week"
                  value={formData.week}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-green-600 focus:outline-none"
                  placeholder="Week 43"
                  required
                />
              </div>

              <div>
                <label className="block text-green-900 font-bold mb-2">NC Router Doors (pieces)</label>
                <input
                  type="number"
                  name="ncRouterValue"
                  value={formData.ncRouterValue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-green-600 focus:outline-none"
                  placeholder="26"
                  required
                />
              </div>

              <div>
                <label className="block text-green-900 font-bold mb-2">Upload Gambar Quality Issue</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-green-600 focus:outline-none"
                />
                {uploading && (
                  <p className="text-sm text-gray-600 mt-2">Uploading...</p>
                )}
                {formData.imageUrl && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-2">Preview:</p>
                    <img 
                      src={formData.imageUrl} 
                      alt="Preview" 
                      className="w-full h-64 object-contain rounded-xl border-2 border-gray-300"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-green-900 font-bold mb-2">Quality Issue Label</label>
                <input
                  type="text"
                  name="imageLabel"
                  value={formData.imageLabel}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-green-600 focus:outline-none"
                  placeholder="Dowel terlepas dari bottom rail"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all mt-6"
            >
              Simpan Data
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QualityInputForm;