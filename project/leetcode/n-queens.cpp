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
    vector<vector<string> > solveNQueens(int n) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        vector<int> queens;
        vector<vector<string> > res;
        
        generateSolution(0,n,res,queens);
        return res;
    }

    void generateSolution(int lvl, int n, vector<vector<string> > &res, vector<int> &cur){
        if(lvl == n){   // this is the solution
            vector<string> rr;
            for(int i = 0 ; i < cur.size() ; i++){
                char buf[n+1];
                memset(buf,'.',n); buf[n] = 0; buf[cur[i]] = 'Q';
                rr.push_back(string(buf));
            }
            res.push_back(rr);
        }
        
        for(int i = 0 ; i < n ; i++){
            // Test if clash with current
            bool hasClash = false;
            for(int j = 0 ; j < cur.size() ; j++){
                if(cur[j] == i || (abs (lvl - j) == abs(cur[j] - i) )){
                    hasClash = true; break;
                }
            }
            
            if(hasClash) continue;
            
            cur.push_back(i);
            generateSolution(lvl + 1, n, res, cur);
            cur.pop_back();
        }
    }
};

int main(){
  Solution s;
  vector<vector<string> > r = s.solveNQueens(4);

  cout << "[" << endl;
  for(int i = 0 ;  i< r.size(); i++){
    vector<string> sol = r[i];
    cout << "[";
    for(int j = 0 ; j < sol.size(); j++){
      cout << " " << sol[j] << endl;
    }
    cout << "]" << endl;
  }
  cout << "]" << endl;
  return 0;
}
