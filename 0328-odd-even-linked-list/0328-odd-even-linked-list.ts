function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head || !head.next)
        return head;

    let { val, next: node } = head;
    const { val: val1, next } = node;

    node = next;

    const oddList = new ListNode(val), evenList = new ListNode(val1);
    let tmp = oddList, tmp1 = evenList, i = 2;

    while (node) {
        const { val, next } = node;

        if (i % 2) {
            tmp1.next = new ListNode(val);
            tmp1 = tmp1.next;
        } else {
            tmp.next = new ListNode(val);
            tmp = tmp.next;
        }
        
        node = next;
        i++;
    }

    evenList && (tmp.next = evenList);

    return oddList;
}