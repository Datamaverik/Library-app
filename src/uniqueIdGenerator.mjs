let counter = 0;

export function uniqueIdGenerator() {
  const rand = counter++;

  const timeStamp = new Date().getTime();

  const uniqueId = `${rand}${timeStamp}`;

  return uniqueId;
}
