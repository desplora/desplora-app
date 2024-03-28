import type { Metadata } from "next";
import "./globals.css";
import Header from "../componentes/header/header";
import Footer from "../componentes/footer/footer";



export const metadata: Metadata = {
  title: "desplora",
  description: "desplora es un blog de viajes y destinos interesantes en todo el mundo, Viajes turísticos, Vacaciones, Turismo, Reservas de hotel, Vuelos baratos,  Paquetes turísticos, Alojamiento, Viajes en familia, de aventura,  Guía de viaje con desplora, Consejos y Experiencias de viaje, Viajes económicos, culturales y gastronómicos, Transporte turístico, Viajes de fin  de semana, Destinos exóticos, Viajes en tren, Actividades turísticas, Viajes  de mochilero, Viajes de playa con Aida y Diego en desplora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      
      <body>
      <Header />
      <main>
        {children}
      </main>
      <Footer/>
      </body>
    </html>
  );
}
