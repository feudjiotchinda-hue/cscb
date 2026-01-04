import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ChevronDown } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('financial');

  // Données projections financières (12 mois)
  const financialData = [
    { month: 'Mois 1', revenue: 2000000, costs: 2500000, cumulative: -500000 },
    { month: 'Mois 2', revenue: 2500000, costs: 2400000, cumulative: -400000 },
    { month: 'Mois 3', revenue: 3200000, costs: 2350000, cumulative: -150000 },
    { month: 'Mois 4', revenue: 4500000, costs: 2400000, cumulative: 1950000 },
    { month: 'Mois 5', revenue: 5200000, costs: 2400000, cumulative: 4750000 },
    { month: 'Mois 6', revenue: 5800000, costs: 2450000, cumulative: 8100000 },
    { month: 'Mois 7', revenue: 6500000, costs: 2500000, cumulative: 12100000 },
    { month: 'Mois 8', revenue: 7200000, costs: 2600000, cumulative: 16700000 },
    { month: 'Mois 9', revenue: 7800000, costs: 2700000, cumulative: 21800000 },
    { month: 'Mois 10', revenue: 8500000, costs: 2800000, cumulative: 27500000 },
    { month: 'Mois 11', revenue: 9200000, costs: 2900000, cumulative: 33800000 },
    { month: 'Mois 12', revenue: 10000000, costs: 3000000, cumulative: 40800000 }
  ];

  // Analyse segments clients
  const segmentData = [
    { name: 'Femmes enceintes', value: 25, patients: 180 },
    { name: 'Enfants/Ados', value: 30, patients: 250 },
    { name: 'Maladies chroniques', value: 20, patients: 140 },
    { name: 'Personnes âgées', value: 10, patients: 80 },
    { name: 'Population générale', value: 15, patients: 120 }
  ];

  const COLORS = ['#8B5CF6', '#06B6D4', '#EC4899', '#F59E0B', '#10B981'];

  // Services et tarification
  const servicesData = [
    { service: 'Consultation adulte', price: '1.000-1.500', frequency: 'Élevée', revenue: '↑↑↑' },
    { service: 'Consultation enfant', price: '500-1.500', frequency: 'Élevée', revenue: '↑↑' },
    { service: 'Suivi grossesse', price: '2.000-3.000', frequency: 'Moyenne', revenue: '↑↑↑' },
    { service: 'Accouchement simple', price: '15.000-20.000', frequency: 'Faible', revenue: '↑↑↑' },
    { service: 'Laboratoire de base', price: '500-5.000', frequency: 'Élevée', revenue: '↑↑' },
    { service: 'Soins infirmiers', price: '1.000-3.000', frequency: 'Moyenne', revenue: '↑↑' }
  ];

  // Analyse marché (TAM/SAM/SOM)
  const marketData = [
    { market: 'TAM\n(Marché total)', size: 45000, description: 'Population Batcham' },
    { market: 'SAM\n(Marché adressable)', size: 18000, description: '40% clientèle rurale' },
    { market: 'SOM\n(Capture année 1)', size: 2700, description: '15% du SAM' }
  ];

  // Investissement initial
  const investmentData = [
    { item: 'Infrastructure & équipement', amount: 8500000 },
    { item: 'Pharmacie & consommables', amount: 2000000 },
    { item: 'Mobilier & accueil', amount: 1500000 },
    { item: 'Autorisations & permis', amount: 500000 },
    { item: 'Réserve de trésorerie', amount: 1000000 }
  ];

  // État d'avancement
  const progressData = [
    { phase: 'Enquête terrain', completion: 100, status: '✓ Complété' },
    { phase: 'Structuration administrative', completion: 75, status: 'En cours' },
    { phase: 'Aménagement locaux', completion: 0, status: 'À venir' },
    { phase: 'Équipement & mobilier', completion: 0, status: 'À venir' },
    { phase: 'Recrutement équipe', completion: 0, status: 'À venir' },
    { phase: 'Formation & certification', completion: 0, status: 'À venir' },
    { phase: 'Lancement Phase 1', completion: 0, status: 'À venir' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">CSCB - Tableau de Bord</h1>
          <p className="text-purple-200">Centre de Santé de Batcham Megwo'o</p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {[
            { id: 'financial', label: '💰 Finances' },
            { id: 'market', label: '📊 Marché' },
            { id: 'services', label: '🏥 Services' },
            { id: 'segments', label: '👥 Clients' },
            { id: 'progress', label: '📈 Avancement' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-slate-700 text-purple-200 hover:bg-slate-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Financial Tab */}
        {activeTab === 'financial' && (
          <div className="space-y-8">
            {/* KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-6 text-white">
                <p className="text-sm text-purple-200 mb-2">Financement requis</p>
                <p className="text-3xl font-bold">13.5 M FCFA</p>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-6 text-white">
                <p className="text-sm text-blue-200 mb-2">Revenu moyen/mois</p>
                <p className="text-3xl font-bold">6.2 M FCFA</p>
              </div>
              <div className="bg-gradient-to-br from-pink-600 to-pink-800 rounded-lg p-6 text-white">
                <p className="text-sm text-pink-200 mb-2">Coûts fixes/mois</p>
                <p className="text-3xl font-bold">2.5 M FCFA</p>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-lg p-6 text-white">
                <p className="text-sm text-green-200 mb-2">Seuil rentabilité</p>
                <p className="text-3xl font-bold">Mois 4</p>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
              <h2 className="text-xl font-bold text-white mb-6">Projections 12 Mois</h2>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={financialData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="month" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip 
                    contentStyle={{background: '#1e293b', border: '1px solid #8B5CF6'}}
                    labelStyle={{color: '#fff'}}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={2} name="Revenu" />
                  <Line type="monotone" dataKey="costs" stroke="#EF4444" strokeWidth={2} name="Coûts" />
                  <Line type="monotone" dataKey="cumulative" stroke="#8B5CF6" strokeWidth={3} name="Profit cumulé" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Investment Table */}
            <div className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
              <h2 className="text-xl font-bold text-white mb-6">Investissement Initial</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-white">
                  <thead>
                    <tr className="border-b border-purple-500/30">
                      <th className="text-left py-3 px-4 text-purple-300">Catégorie</th>
                      <th className="text-right py-3 px-4 text-purple-300">Montant (FCFA)</th>
                      <th className="text-right py-3 px-4 text-purple-300">% du total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {investmentData.map((item, idx) => {
                      const total = investmentData.reduce((sum, i) => sum + i.amount, 0);
                      const percent = ((item.amount / total) * 100).toFixed(1);
                      return (
                        <tr key={idx} className="border-b border-slate-700 hover:bg-slate-700/50">
                          <td className="py-3 px-4">{item.item}</td>
                          <td className="text-right py-3 px-4 font-semibold">{(item.amount / 1000000).toFixed(1)} M</td>
                          <td className="text-right py-3 px-4 text-green-400">{percent}%</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-purple-500 bg-purple-600/20">
                      <td className="py-3 px-4 font-bold">TOTAL</td>
                      <td className="text-right py-3 px-4 font-bold">13.5 M</td>
                      <td className="text-right py-3 px-4 font-bold">100%</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Market Tab */}
        {activeTab === 'market' && (
          <div className="space-y-8">
            <div className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
              <h2 className="text-xl font-bold text-white mb-6">Analyse du Marché (TAM/SAM/SOM)</h2>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={marketData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="market" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip 
                    contentStyle={{background: '#1e293b', border: '1px solid #8B5CF6'}}
                    labelStyle={{color: '#fff'}}
                  />
                  <Bar dataKey="size" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/50 rounded-lg p-6">
                <p className="text-purple-300 font-semibold mb-2">TAM - Marché Total</p>
                <p className="text-3xl font-bold text-white mb-2">45.000</p>
                <p className="text-sm text-gray-300">Population Batcham (zone de couverture)</p>
              </div>
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/50 rounded-lg p-6">
                <p className="text-blue-300 font-semibold mb-2">SAM - Marché Adressable</p>
                <p className="text-3xl font-bold text-white mb-2">18.000</p>
                <p className="text-sm text-gray-300">40% population adressable</p>
              </div>
              <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-500/50 rounded-lg p-6">
                <p className="text-green-300 font-semibold mb-2">SOM - Capture Année 1</p>
                <p className="text-3xl font-bold text-white mb-2">2.700</p>
                <p className="text-sm text-gray-300">15% du SAM (objectif conservateur)</p>
              </div>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-xl font-bold text-white mb-6">Services & Tarification</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-white">
                <thead>
                  <tr className="border-b border-purple-500/30">
                    <th className="text-left py-4 px-4 text-purple-300">Service</th>
                    <th className="text-left py-4 px-4 text-purple-300">Tarif (FCFA)</th>
                    <th className="text-left py-4 px-4 text-purple-300">Fréquence</th>
                    <th className="text-center py-4 px-4 text-purple-300">Potentiel</th>
                  </tr>
                </thead>
                <tbody>
                  {servicesData.map((service, idx) => (
                    <tr key={idx} className="border-b border-slate-700 hover:bg-slate-700/50">
                      <td className="py-4 px-4 font-medium">{service.service}</td>
                      <td className="py-4 px-4">{service.price}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          service.frequency === 'Élevée' ? 'bg-green-600/30 text-green-300' :
                          service.frequency === 'Moyenne' ? 'bg-yellow-600/30 text-yellow-300' :
                          'bg-gray-600/30 text-gray-300'
                        }`}>
                          {service.frequency}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center text-yellow-400 font-bold">{service.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Segments Tab */}
        {activeTab === 'segments' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
                <h2 className="text-xl font-bold text-white mb-6">Distribution Segments (% de la clientèle)</h2>
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={segmentData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {segmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{background: '#1e293b', border: '1px solid #8B5CF6'}}
                      labelStyle={{color: '#fff'}}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
                <h2 className="text-xl font-bold text-white mb-6">Patients Estimés (Année 1)</h2>
                <div className="space-y-4">
                  {segmentData.map((segment, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white">{segment.name}</span>
                        <span className="text-purple-300 font-bold">{segment.patients} patients</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-3">
                        <div
                          className="h-3 rounded-full"
                          style={{
                            width: `${(segment.patients / 250) * 100}%`,
                            backgroundColor: COLORS[idx]
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-purple-600/20 rounded-lg border border-purple-500/50">
                  <p className="text-purple-200 text-sm">
                    <span className="font-bold text-white">Total: 770 patients</span> estimés année 1 (objectif conservateur)
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Progress Tab */}
        {activeTab === 'progress' && (
          <div className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-xl font-bold text-white mb-6">État d'Avancement du Projet</h2>
            <div className="space-y-6">
              {progressData.map((phase, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{phase.phase}</span>
                    <span className={`text-sm font-semibold ${
                      phase.status === '✓ Complété' ? 'text-green-400' :
                      phase.status === 'En cours' ? 'text-yellow-400' :
                      'text-gray-400'
                    }`}>
                      {phase.status}
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-3 rounded-full transition-all ${
                        phase.completion === 100 ? 'bg-green-500' :
                        phase.completion > 50 ? 'bg-yellow-500' :
                        phase.completion > 0 ? 'bg-blue-500' :
                        'bg-gray-600'
                      }`}
                      style={{ width: `${phase.completion}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{phase.completion}%</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}