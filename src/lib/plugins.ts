import { visit, SKIP } from 'unist-util-visit'
import type { Node, Parent } from 'unist'

export function rehypeUnwrapImages() {
  function visitor(node: Node, index: number | null, parent: Parent | null) {
    parent.children.splice(index, 1, ...node.children)
    return [SKIP, index]
  }

  function containsImage(node: Node) {
    return (
      node.tagName === 'p' &&
      node.children.some((child) => child.tagName === 'img')
    )
  }

  return (tree: Node) => {
    visit(tree, containsImage, visitor)
  }
}
