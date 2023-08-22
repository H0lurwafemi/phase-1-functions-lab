
// Function to calculate the distance from Scuber headquarters in blocks
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }
  
  // Function to calculate the distance from Scuber headquarters in feet
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  
  // Function to calculate the distance travelled in feet between two locations
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(endBlock - startBlock);
    const feetPerBlock = 264;
    return blocksTravelled * feetPerBlock;
  }
  
  // Function to calculate the fare price based on the distance
  function calculatesFarePrice(startBlock, endBlock) {
    const feetTravelled = distanceTravelledInFeet(startBlock, endBlock);
    
    if (feetTravelled <= 400) {
      return 0;
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
      return (feetTravelled - 400) * 0.02;
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  

  
