function analyzeStress() {
    // Get all selected causes
    const selectedCauses = [];
    const checkboxes = document.querySelectorAll('input[name="cause"]:checked');
    
    checkboxes.forEach(checkbox => {
      selectedCauses.push(checkbox.value);
    });
  
    console.log("Selected Causes:", selectedCauses); // Debugging line to check the selected causes
  
    // Analyze stress type based on selected causes
    let stressType = '';
  
    // Analyze based on the causes selected
    if (selectedCauses.includes('work_pressure') || selectedCauses.includes('academic_stress') || selectedCauses.includes('financial_difficulties')) {
      stressType = 'behavioral';
    } else if (selectedCauses.includes('relationship_problems') || selectedCauses.includes('family_responsibilities') || selectedCauses.includes('social_pressures')) {
      stressType = 'emotional';
    } else if (selectedCauses.includes('health_issues') || selectedCauses.includes('major_life_changes') || selectedCauses.includes('uncertainty_about_future')) {
      stressType = 'physical';
    } else if (selectedCauses.includes('loss_of_loved_one') || selectedCauses.includes('unemployment')) {
      stressType = 'mental';
    }
  
    console.log("Analyzed Stress Type:", stressType); // Debugging line to check the analyzed stress type
  
    // Redirect to the appropriate goals page
    if (stressType === 'behavioral') {
      window.location.href = 'daily_goals.html';
    } else if (stressType === 'emotional') {
      window.location.href = 'daily_goals.html';
    } else if (stressType === 'physical') {
      window.location.href = 'daily_goals.html';
    } else if (stressType === 'mental') {
      window.location.href = 'daily_goals.html';
    } else {
      alert('Please select at least one cause of stress');
    }
  }
  