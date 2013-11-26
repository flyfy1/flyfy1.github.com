#include <cstdio>
#include <iostream>

using namespace std;

struct ListNode{
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};

void reorderList(ListNode *head){
  // IMPORTANT: Please reset any member data you declared, as
  // the same Solution instance will be reused for each test case.
  if(head == NULL) return;

  // first pass: flip the second half
  ListNode *n1, *n2;
  n1 = n2 = head;

  bool isN2NeedInc = false;
  while(n1 != NULL){
    if(isN2NeedInc){
      n2 = n2->next;
    }

    isN2NeedInc = !isN2NeedInc;
    n1 = n1->next;
  }

  ListNode *n = n2->next; n2->next = NULL;
  if(n == NULL) return;

  while(n != NULL){
    n1 = n; n = n1->next;
    n1->next = n2; n2 = n1;
  }

  // second pass: merge from the back
  n = head; n2 = head->next;

  bool isTailTurn = true;
  while(n1 != n2){
    if(isTailTurn){
      n->next = n1; n = n1;
      n1 = n1->next;
    } else{
      n->next = n2; n = n2;
      n2 = n2->next;
    }

    isTailTurn = !isTailTurn;
  }
}

int main(){
  ListNode head(1), *node = &head;
  for(int i = 0 ; i < 3; i++){
    ListNode *t = (ListNode*)malloc(sizeof(ListNode));
    t->val = 20 - i; t->next = NULL;
    node->next = t; node = t;
  }

  cout << " current list: " << endl;
  ListNode *n = &head;
  while(n != NULL){ printf(" %d",n->val); n = n->next;}
  cout << endl;

  reorderList(&head);

  cout << " current list: " << endl;
  n = &head;
  while(n != NULL){ printf(" %d",n->val); n = n->next;}
  cout << endl;

  return 0;
}
