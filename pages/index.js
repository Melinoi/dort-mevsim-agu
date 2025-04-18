export default function Home() {
  return (
    <main className="min-h-screen bg-red-50 text-gray-800">
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Dört Mevsim AGÜ</h1>
        <p className="text-lg max-w-xl mx-auto">
          Bu proje, AGÜ kampüsünün dört mevsim boyunca nasıl değiştiğini belgelemek için kurulan
          öğrenci katılımlı bir fotoğraf gözlem sistemidir. Katılmak çok kolay: Telefonunu belirlenen noktalardan birine yerleştir, fotoğrafı çek ve yükle!
        </p>
        <a href="#upload" className="inline-block mt-6 px-6 py-3 bg-red-500 text-white rounded-2xl shadow-md hover:bg-red-600">
          Fotoğraf Yükle
        </a>
      </section>

      <section id="upload" className="bg-white py-16 px-4">
        <h2 className="text-3xl font-semibold text-red-500 mb-6 text-center">Fotoğraf Yükleme Formu</h2>
        <div className="max-w-xl mx-auto">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXXXXX/viewform?embedded=true"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >Yükleme Formu</iframe>
        </div>
      </section>

      <section className="bg-red-100 py-16 px-4">
        <h2 className="text-3xl font-semibold text-red-600 mb-6 text-center">Fotoğraf Galerisi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <img src="/photos/point1-01.jpg" alt="Gözlem Noktası 1" className="rounded-lg shadow-md" />
          <img src="/photos/point2-02.jpg" alt="Gözlem Noktası 2" className="rounded-lg shadow-md" />
          <img src="/photos/point3-03.jpg" alt="Gözlem Noktası 3" className="rounded-lg shadow-md" />
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-8">
        © 2025 Dört Mevsim AGÜ | Fotoğrafçılık Kulübü
      </footer>
    </main>
  );
}
