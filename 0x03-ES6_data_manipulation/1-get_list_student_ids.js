export default function getListStudentIds(arg) {
  const arrayOfIds = [];

  if (!Array.isArray(arg)) {
    return [];
  }

  arg.map((item) => arrayOfIds.push(item.id));

  return arrayOfIds;
}
