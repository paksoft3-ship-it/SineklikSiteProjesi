import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacybeleid | Window Specialist',
  description: 'Lees ons privacybeleid over hoe wij omgaan met uw persoonsgegevens.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-secondary dark:text-white mb-8">Privacybeleid</h1>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-500 dark:text-gray-400 mb-6">Laatst bijgewerkt: januari 2024</p>
          
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mt-8 mb-4">1. Inleiding</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Window Specialist respecteert uw privacy en zet zich in voor de bescherming van uw persoonsgegevens. Dit privacybeleid legt uit hoe wij uw persoonsgegevens verzamelen, gebruiken en beschermen.</p>
          
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mt-8 mb-4">2. Welke gegevens verzamelen wij?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Wij kunnen de volgende persoonsgegevens verzamelen:</p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
            <li>Naam en contactgegevens (e-mail, telefoonnummer, adres)</li>
            <li>Bestelgegevens en betalingsinformatie</li>
            <li>Communicatie met onze klantenservice</li>
            <li>Website gebruiksgegevens (cookies)</li>
          </ul>
          
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mt-8 mb-4">3. Waarvoor gebruiken wij uw gegevens?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Wij gebruiken uw gegevens voor:</p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
            <li>Het verwerken van uw bestellingen</li>
            <li>Het versturen van offerte en orderbevestigingen</li>
            <li>Klantenservice en communicatie</li>
            <li>Het verbeteren van onze website en diensten</li>
            <li>Marketing (alleen met uw toestemming)</li>
          </ul>
          
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mt-8 mb-4">4. Hoe lang bewaren wij uw gegevens?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor ze zijn verzameld, tenzij wettelijk verplicht om ze langer te bewaren.</p>
          
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mt-8 mb-4">5. Delen van gegevens</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Wij delen uw gegevens alleen met derden wanneer dit noodzakelijk is voor de uitvoering van onze diensten, zoals bezorgdiensten en betalingsverwerkers. Wij verkopen uw gegevens nooit aan derden.</p>
          
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mt-8 mb-4">6. Uw rechten</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">U heeft het recht om:</p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
            <li>Uw gegevens in te zien, te corrigeren of te verwijderen</li>
            <li>Bezwaar te maken tegen de verwerking van uw gegevens</li>
            <li>Uw toestemming in te trekken</li>
            <li>Een klacht in te dienen bij de Autoriteit Persoonsgegevens</li>
          </ul>
          
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mt-8 mb-4">7. Cookies</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Wij gebruiken cookies om uw ervaring op onze website te verbeteren. U kunt uw cookievoorkeuren aanpassen in uw browserinstellingen.</p>
          
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mt-8 mb-4">8. Contact</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Voor vragen over dit privacybeleid kunt u contact met ons opnemen via info@windowspecialist.nl of +31 (0)20 123 4567.</p>
        </div>
      </div>
    </div>
  );
}
