import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden | Window Specialist',
  description: 'Lees onze algemene voorwaarden voor bestellingen bij Window Specialist.',
};

export default function VoorwaardenPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-secondary dark:text-white mb-8">Algemene Voorwaarden</h1>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-500 dark:text-gray-400 mb-6">Laatst bijgewerkt: januari 2024</p>
          
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mt-8 mb-4">Artikel 1 - Definities</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">In deze voorwaarden wordt verstaan onder:</p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
            <li><strong>Ondernemer:</strong> Window Specialist B.V.</li>
            <li><strong>Consument:</strong> de natuurlijke persoon die niet handelt in de uitoefening van beroep of bedrijf</li>
            <li><strong>Overeenkomst:</strong> de overeenkomst tussen ondernemer en consument</li>
          </ul>
          
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mt-8 mb-4">Artikel 2 - Toepasselijkheid</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Deze algemene voorwaarden zijn van toepassing op elk aanbod van de ondernemer en op elke tot stand gekomen overeenkomst op afstand tussen ondernemer en consument.</p>
          
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mt-8 mb-4">Artikel 3 - Prijzen</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Alle prijzen zijn inclusief BTW. De prijzen in de webshop zijn onder voorbehoud van typefouten. Uit typefouten kan geen verplichting worden ontleend.</p>
          
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mt-8 mb-4">Artikel 4 - Maatwerk Producten</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Alle producten worden op maat gemaakt. De consument is verantwoordelijk voor het correct doorgeven van de maten. Window Specialist biedt een gratis meetverzekering: bij foutief meten door de consument wordt het product eenmalig gratis vervangen.</p>
          
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mt-8 mb-4">Artikel 5 - Levering</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">De levertijd bedraagt gemiddeld 2-3 weken na ontvangst van de bestelling. De ondernemer zal de grootst mogelijke zorgvuldigheid in acht nemen bij het in ontvangst nemen en bij de uitvoering van bestellingen.</p>
          
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mt-8 mb-4">Artikel 6 - Herroepingsrecht</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Omdat onze producten op maat gemaakt worden, geldt er geen herroepingsrecht conform artikel 6:230p BW. Bij beschadigde of defecte producten kunt u binnen 14 dagen contact met ons opnemen.</p>
          
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mt-8 mb-4">Artikel 7 - Garantie</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Op al onze producten geldt een garantie van 5 jaar. De garantie geldt niet voor:</p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
            <li>Slijtage door normaal gebruik</li>
            <li>Schade door onjuiste montage</li>
            <li>Schade door onoordeelkundig gebruik</li>
          </ul>
          
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mt-8 mb-4">Artikel 8 - Betaling</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Betaling kan geschieden via iDEAL, PayPal, Bancontact of bij aflevering. Bij betaling bij aflevering gelden mogelijk aanvullende kosten.</p>
          
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mt-8 mb-4">Artikel 9 - Klachten</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Klachten over de uitvoering van de overeenkomst moeten binnen bekwame tijd nadat de consument de gebreken heeft geconstateerd, volledig en duidelijk omschreven worden ingediend bij de ondernemer.</p>
          
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mt-8 mb-4">Artikel 10 - Toepasselijk Recht</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Op overeenkomsten tussen de ondernemer en de consument is uitsluitend Nederlands recht van toepassing.</p>
          
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mt-8 mb-4">Contact</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Window Specialist B.V.<br/>Industrieweg 123<br/>1234 AB Amsterdam<br/>KVK: 12345678<br/>BTW: NL001234567B01<br/>E-mail: info@windowspecialist.nl<br/>Tel: +31 (0)20 123 4567</p>
        </div>
      </div>
    </div>
  );
}
