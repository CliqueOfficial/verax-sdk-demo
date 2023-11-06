import VeraxSdk from '@verax-attestation-registry/verax-sdk';


const sdk = new VeraxSdk('https://rpc.goerli.linea.build');

sdk.schema.getSchema('0x1').then((schema) => {
  console.log(schema);
})