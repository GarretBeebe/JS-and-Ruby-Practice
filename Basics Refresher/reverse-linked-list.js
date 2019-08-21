//Reverse a linked list
//1-2-3-4
//4-3-2-1

Function reverse (head) {
	If (!head || !head.next) {
		return head;
	}

	Let tmp = reverse(head.next);
	Head.next.next = head;
	Head.next = undefined;
	return tmp;
}
