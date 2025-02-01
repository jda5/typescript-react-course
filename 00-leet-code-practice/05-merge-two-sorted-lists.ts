// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by
// splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null
): ListNode | null {
	const dummy = new ListNode(); // Dummy node to simplify edge cases
	let curr = dummy;

	// Merge lists while both have elements
	while (list1 !== null && list2 !== null) {
		if (list1.val < list2.val) {
			curr.next = list1;
			list1 = list1.next;
		} else {
			curr.next = list2;
			list2 = list2.next;
		}
		curr = curr.next; // Move to the next node
	}

	// Attach the remaining part of the non-empty list
	curr.next = list1 ?? list2;

	return dummy.next; // Skip the dummy node and return the real head
}
