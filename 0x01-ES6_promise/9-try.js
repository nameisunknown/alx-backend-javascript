export default function guardrail(mathFunction){
  const queue = [];
  try{
    queue.push(mathFunction());
    // const mathResult = mathFunction();
    // queue.push(mathResult);
  } catch(err){
    queue.push(`Error: ${err.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}