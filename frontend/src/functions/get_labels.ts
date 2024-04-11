type Labels =  {
  [key: string]: string
}

export default function get_labels(labels: Object, lang: string) : Labels {
  const current_labels= {};

  for (const [key, value] of Object.entries(labels)) {
    if  (value[`${lang}`]) {
      Object.assign(current_labels, {[key]: value[`${lang}`]});
    }
  }

  return current_labels;
}