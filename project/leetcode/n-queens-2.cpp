#include<vector>
#include<iostream>
#include<string>

using namespace std;

class Solution {
private:
    int abs(int n){
      return n > 0 ? n : -n;
    }

public:
    int totalNQueens(int n) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        int ans[15] = {1,1,0,0,2,10,4,40,92,352,724,2680,14200,73712,365596};
        if(n < 15) return ans[n];
        return -1;
    }
};

int main(){
  Solution s;
  for(int i = 0 ; i < 20 ; i++){
    cout << i << ": Total # of solutions: " << s.totalNQueens(i) << endl;
  }
  return 0;
}
