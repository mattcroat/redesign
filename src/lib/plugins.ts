import { visit, SKIP } from 'unist-util-visit'
import type { Root, Element } from 'hast'

export function rehypeUnwrapImages() {
  function containsImage(node: Element) {
    return (
      node.tagName === 'p' &&
      node.children.some((child) => {
        if (child.type === 'element') {
          return child.tagName === 'img'
        }
      })
    )
  }

  return (tree: Root) => {
    visit(tree, containsImage, (node, index, parent) => {
      if (node.type === 'element') {
        parent.children.splice(index, 1, ...node.children)
        return [SKIP, index]
      }
    })
  }
}
