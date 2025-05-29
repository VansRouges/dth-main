export async function fetchAllUsers() {
    try {
      const response = await fetch('/api/users');
      
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
  
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch users');
      }
  
      console.log('Fetched users:', data);
      return data.data || [];
    } catch (error) {
      console.error('Error in fetchAllUsers:', error);
      throw error;
    }
  }