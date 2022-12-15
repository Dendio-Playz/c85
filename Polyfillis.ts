global.__reanimatedWorkletInit = function (){
    const someWorklet = () => {
      'worklet';
      console.log("Hey I'm running on the UI thread");
    };
  }
  
  export default {}