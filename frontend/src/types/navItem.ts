export type navItem = {
  order: number,
  id: number,
  title: string,
  type: string,
  path: string,
  childs?: Array<navItem>,
  footer_title?: string,
  related?: {
    id: number,
    title: string,
    description: string | null,
    disabled: boolean,
    slug: string
  }
}