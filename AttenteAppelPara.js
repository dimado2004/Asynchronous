async function parallelCalls(urls) {
    try {
      // Créer un tableau de promesses avec fetch pour chaque URL
      const promises = urls.map(url => fetch(url));
  
      // Attendre que toutes les promesses soient résolues
      const responses = await Promise.all(promises);
  
      // Vérifier si toutes les requêtes ont réussi
      const data = await Promise.all(responses.map(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // ou response.text() en fonction du type de réponse
      }));
  
      // Enregistrer les données
      console.log('Toutes les réponses ont été récupérées:', data);
      return data;
  
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  }
  
  // Exemple d'utilisation
  const urls = [
    'https://api.exemple.com/data1',
    'https://api.exemple.com/data2',
    'https://api.exemple.com/data3'
  ];
  
  parallelCalls(urls);