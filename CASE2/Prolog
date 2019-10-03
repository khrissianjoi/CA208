/* FACTS */

parents(david, george, noreen).
parents(jennifer, george, noreen).
parents(georgejr, george, noreen).
parents(scott, george, noreen).
parents(joanne, george, noreen).
parents(jessica, david, edel).
parents(clara, david, edel).
parents(michael, david, edel).
parents(laura, georgejr, susan).
parents(anna, scott, siobhan).


/* Relationships */

father(X, Y) :- parents(Y, X, _).
male(X) :- father(X, _).

mother(X, Y) :- parents(Y, _, X).
female(X) :- mother(X, _).

grandfather(X, Y) :- father(X, Z), father(Z, Y).
grandfather(X, Y) :- father(X, Z), mother(Z, Y).

grandmother(X, Y) :- mother(X, Z), mother(Z, Y).
grandmother(X, Y) :- mother(X, Z), father(Z, Y).

brother(X, Y) :- male(X), father(Z, X), father(Z, Y), X \== Y.

sister(X, Y) :- female(X), father(Z, X), father(Z, Y), X \== Y.

uncle(X, Y) :- brother(X, Z), father(Z, Y).

aunt(X, Y) :- female(X), parents(_, T, X), uncle(T, Y).

cousin(X, Y) :- grandfather(Z, X), grandfather(Z, Y), father(W, X), father(R, Y), brother(W, R), father(Z, W).

__________________________________________________________________________


book(illiad,homer,study,500).
book(c,richie,study, 150).
book(ntbible,sams,reference,480).
book(ntfordummies,bob, reference,200).
book(montypython,cleese,comedy,300).
book(pythonalgorithms,david,study, 225).
book(lilacbus,binchey,fiction,200).
book(hamlet,shakespere,drama,450).

build_library(Lib) :- findall(book(Title, Author, Genre, Size), book(Title, Author, Genre, Size), Lib).


/* To find the leisure books in the library first build the library from the
   facts below and then query the library e.g.

   build_library(Lib),leisure(B,Lib).
*/

leisure_book(book(_, _, Genre, _)) :- Genre == comedy.
leisure_book(book(_, _, Genre, _)) :- Genre == fiction.
leisure(_,[]).
leisure(H, [H | _]) :- leisure_book(H).
leisure(B, [_ | T]) :- leisure(B, T).

literature_book(book(_, _, Genre,_)) :- Genre == drama.
literature(_,[]).
literature(B, [B | _]) :- literature_book(B).
literature(B, [_ | T]) :- literature(B, T).

revision_book(book(_, _, Genre, Page)) :- Genre == study, Page > 300.
revision_book(book(_, _, Genre, Page)) :- Genre == reference, Page > 300.
revision(_,[]).
revision(B, [B | _]) :- revision_book(B).
revision(B, [_|T]) :- revision(B, T).

holiday_book(book(_, _, Genre, Page)) :- Genre \== study , Genre \== reference, Page < 400.
holiday(_,[]).
holiday(B,[B|_]) :- holiday_book(B).
holiday(B,[_|T]) :- holiday(B,T).

__________________________________________________________________________

myElem(X, [X|_]).
myElem(X,[_|T]) :- myElem(X,T).

myHead(X,[X|_]).

myLast(X,[X|[]]).
myLast(X, [_|T]) :- myLast(X, T).

myTail(A,[_|A]).
myTail(A,[_|B]) :- myTail(A,B).

%myAppend(A,B,C).

myAppend([],X,X).
myAppend([HA|TA],B,[HA|TC]) :- myAppend(TA,B,TC).

myReverse(L,R) :- myReverse(L,[],R).
myReverse([], R, R).
myReverse([L|Ls], Acc, R) :- myReverse(Ls,[L|Acc],R).

myDelete(X, [X|B], B).
myDelete(X, [Y|A], [Y|B]) :- myDelete(X, A, B).
__________________________________________________________________________

myFib(0,0) :- !.
myFib(1,1) :- !.
myFib(X, N) :- X1 is X - 1, X2 is X -2, myFib(X1, N1), myFib(X2, N2), N is N1 + N2, !.

myCount(0, []) :- !.
myCount(X, [_|T]) :- myCount(X1, T), X is X1 + 1.

mySum([], 0).
mySum([H|A], B) :- mySum(A, X), B is H + X.

myMax([],_) :- !.
myMax([H|A], B) :- H =< B, myMax(A, B), !.
myMax([H|A], B) :- H == B, myMax(A,B), !.

:- op(500, yfx, pow).
%A/B pow X :- myPower(A, B, X).
%myPower(_, 0, _) :- !.
%myPower(A, B, X) :- T is B - 1, myPower(A, T, X), X is A * A, !.

_/0 pow _ :- !.
A/B pow X :- T is B - 1, A/T pow X, X is A * A, !.

__________________________________________________________________________

%class(X,Y) :- Y == negative, negative(X), !; Y == positive, positive(X), !; Y == zero, zero(X), !.

%negative(X) :- X < 0.
%positive(X) :- X > 0.
%zero(X) :- X is 0.

class(X, positive) :- X > 0, !.
class(X, negative) :- X < 0, !.
class(0, zero).

split([],[],[]) :- !.
split([HI|TI], P, [HI|TN]) :- class(HI, negative), split(TI, P, TN), !.
split([HI|TI], [HI|PN], N) :- class(HI, positive), split(TI, PN, N), !; class(HI, zero), split(TI, PN, N), !.

__________________________________________________________________________

directlyNorth(a,f).
directlyNorth(b,g).
directlyNorth(c,h).
directlyNorth(d,i).
directlyNorth(e,j).
directlyNorth(f,k).
directlyNorth(g,l).
directlyNorth(h,m).
directlyNorth(i,n).
directlyNorth(j,o).
directlyNorth(k,p).
directlyNorth(l,q).
directlyNorth(m,r).
directlyNorth(n,s).
directlyNorth(o,t).

directlyEast(a,b).
directlyEast(b,c).
directlyEast(c,d).
directlyEast(d,e).
directlyEast(f,g).
directlyEast(g,h).
directlyEast(h,i).
directlyEast(i,j).
directlyEast(k,l).
directlyEast(l,m).
directlyEast(m,n).
directlyEast(n,o).
directlyEast(p,q).
directlyEast(q,r).
directlyEast(r,s).
directlyEast(s,t).


% Rules

directlySouth(S,N) :- directlyNorth(N,S).

directlyWest(W,E) :- directlyEast(E,W).


north(A,B) :- directlyNorth(A,B).
north(A,B) :- directlyNorth(A,C), north(C,B).

south(A,B) :- directlySouth(A,B).
south(A,B) :- directlySouth(A,C), south(C,B).

east(A,B) :- directlyEast(A,B).
east(A,B) :- directlyEast(A,C), east(C,B).

west(A,B) :- directlyWest(A,B).
west(A,B) :- directlyWest(A,C), west(C,B).

southwest(A,B) :- south(A,C), west(C,B).

northwest(A,B) :- north(A,C), west(C,B).

southeast(A,B) :- south(A,C), east(C,B).

northeast(A,B) :- north(A,C), east(C,B).


