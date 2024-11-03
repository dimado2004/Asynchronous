async function awaitCall(apiCall) {
    try {
      // Appel de l'API
      const response = await apiCall();
  
      // Vérifier si la réponse est correcte
      if (!response.ok) {
        throw new Error(`Erreur API : ${response.statusText}`);
      }
  
      // Retourner les données si tout va bien
      return await response.json();
  
    }
    catch (error) {
      // Enregistrement d'un message d'erreur convivial
      console.error("Une erreur s'est produite lors de l'appel API :", error.message);
      return { error: "Désolé, une erreur s'est produite lors de la communication avec le serveur. Veuillez réessayer plus tard." };
    }
  }